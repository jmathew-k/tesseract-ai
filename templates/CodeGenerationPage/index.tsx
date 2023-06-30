import { useState } from "react";
import Layout from "@/components/Layout";
import Chat from "@/components/Chat";
import Message from "@/components/Message";
import Question from "@/components/Question";
import Answer from "@/components/Answer";
import Code from "@/components/Code";

import { writeCodeChat } from "@/mocks/writeCodeChat";

const CodeGenerationPage = () => {
    const [message, setMessage] = useState<string>("");

    return (
        <Layout>
            <Chat title="Monitor BTC Whale Transfers">
                <Question
                    content="What are high value BTC transfers in the last 24 hours?"
                    time="Just now"
                />
                {/* <Answer loading /> */}
                <Answer time="Just now">
                    <Code items={writeCodeChat} />
                </Answer>
            </Chat>
            <Message
                value={message}
                onChange={(e: any) => setMessage(e.target.value)}
            />
        </Layout>
    );
};

export default CodeGenerationPage;
