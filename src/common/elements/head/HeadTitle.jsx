import Head from "next/head";

const HeadTitle = ({ pageTitle }) => {
    return (
        <Head>
            <meta charSet="utf-8" />
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <title>{pageTitle ? `${pageTitle} |   Women's Lifestyle & Empowerment` : `  Women's Lifestyle & Empowerment`}</title>
            <meta name="description" content="GlamAura is your ultimate guide to women's skincare, fashion, beauty, and lifestyle. Discover the latest in apparel, makeup, shopping tips, gift ideas, and more." />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="robots" content="index, follow" />
            <link rel="icon" type="image/png" href={`${process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASEPATH ?? '' : ''}/favicon.png`} />
            <meta property="og:title" content="GlamAura - Women's Fashion & Skincare" />
            <meta property="og:description" content="Explore top trends in skincare, fashion, beauty, and more with GlamAura. Your go-to source for empowering women through style and self-care." />
            <meta property="og:image" content={`${process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASEPATH ?? '' : ''}/social-preview.png`} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`${process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASEPATH ?? '' : ''}`} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="GlamAura - Women's Lifestyle & Empowerment" />
            <meta name="twitter:description" content="GlamAura offers the latest insights on skincare, fashion, and beauty. Elevate your lifestyle with our curated guides and tips." />
            <meta name="twitter:image" content={`${process.env.NODE_ENV === 'production' ? process.env.NEXT_PUBLIC_BASEPATH ?? '' : ''}/social-preview.png`} />
        </Head>
    );
}

export default HeadTitle;
