export default function Denoise() {
    return (
        <main className="flex min-h-screen flex-col items-center p-10">
            <h1 className="text-3xl font-bold" style={{width: "100%", marginLeft: "50px"}}>
                De-noise output
            </h1>
            <div style={{fontSize: "20px", width: "100%", marginLeft: "50px"}}>
                Upload image to remove noise
            </div>
            <div style={{fontSize: "12px", width: "100%", marginLeft: "50px", marginTop: "50px"}}>
                Choose image
            </div>
        </main>
    )
}