'use client'

export default function Testdata3() {
    const linksToApps = [
        {
            title: "Wikipedia",
            url: "https://www.wikipedia.com/"
        },
    ]
    return (
        <div style={{marginTop: "25px"}}>
            <div style={{fontWeight: "bold"}}>
                External Links
            </div>
            <div className="flex flex-wrap gap-4">
                {linksToApps.map((link, index) => (
                    <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        className="w-40 h-40 rounded-md border-2 link-card"
                        style={{borderColor: process.env.NEXT_PUBLIC_PRIMARY_COLOR as string, boxShadow: "1px 1px 3px 0 rgba(0, 0, 0, 0.5)"}}
                    >
                        <p className="text-lg p-2">
                            {link.title}
                        </p>
                    </a>
                ))}
            </div>
        </div>
    );
}
