const GEMINI_MODEL = process.env.GEMINI_MODEL || "gemini-2.0-flash";
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;

function getRequestBody(request) {
    if (!request.body) {
        return {};
    }

    if (typeof request.body === "string") {
        try {
            return JSON.parse(request.body);
        } catch (error) {
            return {};
        }
    }

    return request.body;
}

module.exports = async function handler(request, response) {
    if (request.method !== "POST") {
        response.setHeader("Allow", "POST");
        return response.status(405).json({ error: "Method not allowed" });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
        return response.status(500).json({ error: "Missing GEMINI_API_KEY" });
    }

    const body = getRequestBody(request);
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!message) {
        return response.status(400).json({ error: "Missing message" });
    }

    try {
        const geminiResponse = await fetch(GEMINI_API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-goog-api-key": apiKey
            },
            body: JSON.stringify({
                system_instruction: {
                    parts: [{
                        text: "Ban la tro ly AI cua website Cong Dong Bau. Tra loi ngan gon, than thien bang tieng Viet khong dau neu nguoi dung viet khong dau. Uu tien thong tin ve hoi thao, uu dai thanh vien, tuyen dung, lien he, benh vien, phong kham, truong mam non va doi tac. Neu cau hoi can tu van y te/phap ly/chuyen sau, hay khuyen nguoi dung lien he Cong Dong Bau de duoc ho tro chinh xac."
                    }]
                },
                contents: [{
                    parts: [{
                        text: message
                    }]
                }],
                generationConfig: {
                    maxOutputTokens: 220,
                    temperature: 0.5
                }
            })
        });

        if (!geminiResponse.ok) {
            const detail = await geminiResponse.text();
            console.error("Gemini request failed", {
                status: geminiResponse.status,
                detail
            });

            return response.status(502).json({
                error: "Gemini request failed",
                status: geminiResponse.status
            });
        }

        const data = await geminiResponse.json();
        const reply = data?.candidates?.[0]?.content?.parts
            ?.map(part => part.text || "")
            .join("")
            .trim();

        return response.status(200).json({
            reply: reply || ""
        });
    } catch (error) {
        console.error(error);

        return response.status(500).json({
            error: "Chat request failed"
        });
    }
};
