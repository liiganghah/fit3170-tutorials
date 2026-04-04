function processImage(img, cv) {
    // read the image into an OpenCV Mat
    let src = cv.imread(img);
    let gray = new cv.Mat();
    let dst = new cv.Mat();

    // step 1: Convert to grayscale
    cv.cvtColor(src, gray, cv.COLOR_RGBA2GRAY);

    // step 2: Apply adaptive thresholding
    cv.adaptiveThreshold(gray, dst, 255, cv.ADAPTIVE_THRESH_GAUSSIAN_C, cv.THRESH_BINARY, 11, 2);

    src.delete();
    gray.delete();

    return dst;
}

module.exports = { processImage };
