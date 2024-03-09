const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const unsplashLink = (id: string, width: number, height: number) =>
    `https://source.unsplash.com/${id}/${width}x${height}`;

const unsplashPhotos = [
    { id: "K0E6E0a0R3A", width: 1080, height: 800 },
    { id: "A4Ax1ApccfA", width: 1080, height: 1620 },
    { id: "AEaTUnvneik", width: 1080, height: 720 },
    { id: "3k3l2brxmwQ", width: 1080, height: 721 },
    { id: "NFoerQuvzrs", width: 1080, height: 1620 },
    { id: "zf9_yiAekJs", width: 1080, height: 607 },
    { id: "BErJJL_KsjA", width: 1080, height: 608 },
    { id: "wLBVAF-kMR0", width: 1080, height: 720 },
    { id: "aGwT9nSiTWU", width: 1080, height: 1549 },
    { id: "1VOx-Ffbd9w", width: 1080, height: 720 },
    { id: "TamMbr4okv4", width: 1080, height: 694 },
    { id: "liJGb5bsVQU", width: 1080, height: 1620 },
    { id: "9cx4-QowgLc", width: 1080, height: 720 },
    { id: "ClEsjummC6w", width: 1080, height: 1440 },
    { id: "0RDBOAdnbWM", width: 1080, height: 1620 },
    { id: "jEEYZsaxbH4", width: 1080, height: 810 },
    { id: "vTA2Het76y8", width: 1080, height: 610 },
    { id: "HkbeLxOJlqk", width: 1080, height: 720 },
    { id: "dn7Yssrf7NI", width: 1080, height: 810 },
    { id: "N3B9ZvM0Wio", width: 1080, height: 720 },
    { id: "pPDzeITv26o", width: 1080, height: 720 },
    { id: "32DLZHRbInw", width: 1080, height: 720 },
    { id: "FpdoHOjzaOM", width: 1080, height: 720 },

];

const photos = unsplashPhotos.map((photo) => {
    const width = breakpoints[0];
    const height = (photo.height / photo.width) * width;

    return {
        src: unsplashLink(photo.id, width, height),
        width,
        height,
        srcSet: breakpoints.map((breakpoint) => {
            const height = Math.round((photo.height / photo.width) * breakpoint);
            return {
                src: unsplashLink(photo.id, breakpoint, height),
                width: breakpoint,
                height,
            };
        }),
    };
});

export default photos;
