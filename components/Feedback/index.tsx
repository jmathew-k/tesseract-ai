import Details from "./Details";
import Assessment from "./Assessment";

type FeedbackProps = {};

const Feedback = ({}: FeedbackProps) => (
	<div className=''>
		<div className='max-w-[38rem] mb-5 bg-n-1 rounded-2xl xl:max-w-full dark:bg-n-6'>
			<Details />
			<Assessment />
		</div>
		<div className='mb-5 body1 md:body1S'>Summary on Layer 2 projects</div>
		<div className=''>
			<p className='mb-4'>
				<strong>Arbitrum One:</strong> is an Optimistic Rollup that
				aims to feel exactly like interacting with Ethereum, but with
				transactions costing a fraction of what they do on L1. Centralized
				Sequencer receives user's transactions and regularly sends the
				transaction batch to mainnet Ethereum.
			</p>
			<p className='mb-4'>
				<strong>OP Mainnet</strong> is an EVM-equivalent Optimistic
				Rollup chain. It aims to be fast, simple, and secure. With the Nov 2021
				upgrade to OVM 2.0 old fraud proof system has been disabled while the
				new fraud-proof system is being built.
			</p>
			<p className='mb-4'>
				<strong>ZkSync Era</strong>zkSync Era is a general-purpose zk-rollup
				platform from Matter Labs aiming at implementing nearly full EVM
				compatibility in its zk-friendly custom virtual machine. It implements
				standard Web3 API and it preserves key EVM features such as smart
				contract composability while introducing some new concept such as native
				account abstraction.
			</p>
			<p className='mb-4'>
				<strong>dYdX</strong> aims to build a powerful and professional
				exchange for trading crypto assets where users can truly own their
				trades and, eventually, the exchange itself.
			</p>
			<p>
				<strong>Immutable X</strong> claims to be the first Layer 2
				for NFTs on Ethereum. It promises zero gas fees, instant trades and
				scalability for games, applications, marketplaces, without compromise.
			</p>
		</div>
	</div>
)

export default Feedback;
