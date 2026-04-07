import OpenAI from "openai";

// Khởi tạo client OpenAI với cấu hình tùy chỉnh
const openai = new OpenAI({
    apiKey: "sk-4bd27113b7dc78d1-lh6jld-f4f9c69f",
    baseURL: "https://9router.vuhai.io.vn/v1"
});

/**
 * Hàm gửi tin nhắn tới chatbot và nhận câu trả lời
 * @param {string} userMessage Nội dung tin nhắn của người dùng
 * @returns {Promise<string>} Câu trả lời từ LLM
 */
export async function getChatbotResponse(userMessage) {
    try {
        const response = await openai.chat.completions.create({
            model: "ces-chatbot-gpt-5.4",
            messages: [
                { role: "system", content: "You are a helpful assistant." },
                { role: "user", content: userMessage }
            ],
            // Bạn có thể thêm các tham số như temperature, max_tokens tùy nhu cầu
            temperature: 0.7
        });

        return response.choices[0].message.content;
    } catch (error) {
        console.error("Lỗi khi kết nối với Chatbot API:", error);
        throw error;
    }
}

// === Đoạn mã Test Hàm ===
// Bỏ comment đoạn mã dưới đây để chạy thử:
/*
async function runTest() {
    console.log("Đang gửi yêu cầu tới LLM...");
    const reply = await getChatbotResponse("Xin chào, bạn có thể giúp gì cho tôi?");
    console.log("Chatbot phản hồi:", reply);
}
runTest();
*/
