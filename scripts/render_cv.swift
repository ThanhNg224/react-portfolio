import Foundation
import PDFKit

let fileManager = FileManager.default
let currentDir = fileManager.currentDirectoryPath

let pdfPath = "\(currentDir)/public/MobileDeveloper_NguyenPhucThanh_CV.pdf"
let outDir = "\(currentDir)/public/images"

let pdfUrl = URL(fileURLWithPath: pdfPath)
guard let document = PDFDocument(url: pdfUrl) else {
    print("❌ Error: Cannot load PDF at \(pdfPath)")
    exit(1)
}

try? fileManager.createDirectory(atPath: outDir, withIntermediateDirectories: true, attributes: nil)

let pageCount = document.pageCount
print("📄 Found \(pageCount) pages in \(pdfPath)")

for i in 0..<pageCount {
    guard let page = document.page(at: i) else { continue }
    let pageRect = page.bounds(for: .mediaBox)
    let scale: CGFloat = 2.5 // Retina high resolution
    let targetSize = CGSize(width: pageRect.width * scale, height: pageRect.height * scale)
    
    let colorSpace = CGColorSpaceCreateDeviceRGB()
    let bitmapInfo = CGImageAlphaInfo.premultipliedLast.rawValue
    guard let context = CGContext(data: nil,
                                  width: Int(targetSize.width),
                                  height: Int(targetSize.height),
                                  bitsPerComponent: 8,
                                  bytesPerRow: 0,
                                  space: colorSpace,
                                  bitmapInfo: bitmapInfo) else {
        print("❌ Error: Failed to create CGContext for page \(i + 1)")
        continue
    }
    
    context.setFillColor(CGColor(red: 1, green: 1, blue: 1, alpha: 1))
    context.fill(CGRect(origin: .zero, size: targetSize))
    
    context.saveGState()
    context.scaleBy(x: scale, y: scale)
    page.draw(with: .mediaBox, to: context)
    context.restoreGState()
    
    if let image = context.makeImage() {
        let destUrl = URL(fileURLWithPath: "\(outDir)/cv_page_\(i + 1).png")
        if let dest = CGImageDestinationCreateWithURL(destUrl as CFURL, "public.png" as CFString, 1, nil) {
            CGImageDestinationAddImage(dest, image, nil)
            CGImageDestinationFinalize(dest)
            print("✅ Successfully rendered page \(i + 1) -> \(destUrl.path)")
        }
    }
}
print("🎉 Render complete!")
