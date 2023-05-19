import { useState } from "react";
import Layout from "@/components/Layout";
import Chat from "@/components/Chat";
import Message from "@/components/Message";
import Question from "@/components/Question";
import Answer from "@/components/Answer";
import Feedback from "@/components/Feedback";

const EducationFeedbackPage = () => {
    const [message, setMessage] = useState<string>("");

    return (
        <Layout>
            <Chat title="Crypto Tax Auditor">
                <Question
                    document="trades.csv"
                    content="Review this financial years trades and calculate total taxable amount after deductions for the State of California"
                    time="Just now"
                />
                <Answer loading />
                <Answer time="Just now">
                    <Feedback />
                </Answer>
            </Chat>
            <Message
                value={message}
                onChange={(e: any) => setMessage(e.target.value)}
                // document="Student-test.pdf"
            />
        </Layout>
    );
};

export default EducationFeedbackPage;
