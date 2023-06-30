import { useState } from "react";
import Layout from "@/components/Layout";
import Chat from "@/components/Chat";
import Message from "@/components/Message";
import Question from "@/components/Question";
import Answer from "@/components/Answer";
import Photo from "@/components/Photo";

const PhotoEditingPage = () => {
    const [message, setMessage] = useState<string>("");

    return (
			<Layout>
				<Chat title='Scan NFT List Price'>
					<Question
						content="What's the list price for Pudgy Penguin #4609 NFT across all marketplaces ?"
						time='Just now'
						// image="/images/pudgy.png"
					/>
					<Answer loading />
					<Answer time='Just now'>
						<Photo
							image='/images/pudgy.png'
							content='PUDGY PENGUIN #4609 is listed for sale for Ξ4.08 & Ξ4.01 on OpenSea & Blur respectively.'
						/>
					</Answer>
					<Question
						content='Alright, can you find NFTs from the Pudgy collection with similar rarity ?'
						time='Just now'
					/>
					<Answer time='Just now'>
						<Photo
							image='/images/pudgy3.png'
							content='Pudgy Penguin #818 is listed for sale on OpenSea'
							colorPicker
						/>
					</Answer>
					<Answer time='Just now'>
						<Photo
							image='/images/pudgy2.png'
							content='Also, Pudgy Penguin #2893 on Blur'
						/>
					</Answer>
				</Chat>
				<Message
					value={message}
					onChange={(e: any) => setMessage(e.target.value)}
					// image="/images/photo.jpg"
				/>
			</Layout>
		)
};

export default PhotoEditingPage;
