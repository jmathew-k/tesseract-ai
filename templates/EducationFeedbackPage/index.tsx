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
            <Chat title="TVL in Ethereum Layer 2">
                <Question
                    // document="trades.csv"
                    content="What's the top 5 Ethereum Layer 2 scaling solutions by total locked value ?"
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
