#!/usr/bin/env python3
import Quartz
import sys
import os

def extract_pdf_pages(pdf_path, out_prefix):
    pdf_url = Quartz.CFURLCreateFromFileSystemRepresentation(None, pdf_path.encode('utf-8'), len(pdf_path), False)
    pdf_doc = Quartz.CGPDFDocumentCreateWithURL(pdf_url)
    
    if pdf_doc is None:
        print("Could not open PDF document.")
        sys.exit(1)
        
    num_pages = Quartz.CGPDFDocumentGetNumberOfPages(pdf_doc)
    print(f"Extracting {num_pages} pages...")
    
    for i in range(1, num_pages + 1):
        page = Quartz.CGPDFDocumentGetPage(pdf_doc, i)
        page_rect = Quartz.CGPDFPageGetBoxRect(page, Quartz.kCGPDFMediaBox)
        
        out_path = f"{out_prefix}_{i}.png"
        url = Quartz.CFURLCreateFromFileSystemRepresentation(None, out_path.encode('utf-8'), len(out_path), False)
        dest = Quartz.CGImageDestinationCreateWithURL(url, "public.png", 1, None)
        
        ctx = Quartz.CGBitmapContextCreate(None, int(page_rect.size.width * 2), int(page_rect.size.height * 2), 8, 0, Quartz.CGColorSpaceCreateDeviceRGB(), Quartz.kCGImageAlphaPremultipliedLast)
        Quartz.CGContextScaleCTM(ctx, 2.0, 2.0)
        Quartz.CGContextSetRGBFillColor(ctx, 1, 1, 1, 1)
        Quartz.CGContextFillRect(ctx, page_rect)
        Quartz.CGContextDrawPDFPage(ctx, page)
        
        img = Quartz.CGBitmapContextCreateImage(ctx)
        Quartz.CGImageDestinationAddImage(dest, img, None)
        Quartz.CGImageDestinationFinalize(dest)
        print(f"Saved {out_path}")

if __name__ == '__main__':
    if len(sys.argv) > 2:
        extract_pdf_pages(sys.argv[1], sys.argv[2])
    else:
        print("Usage: python3 extract.py <input.pdf> <output_prefix>")
