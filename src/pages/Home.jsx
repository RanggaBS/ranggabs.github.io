const Home = () => {
	return (
		<section
			className={`flex items-center justify-center w-full mx-8 text-xl font-bold text-center home
      xs:text-2xl sm:text-3xl md:text-4xl`}
		>
			<h1>
				👋 Hi! I&apos;m{" "}
				<span className="name text-[var(--color-rbs)]">
					Rangga Buana Saputra
				</span>
				<br />
				Web Developer, based in Indonesia.
			</h1>
		</section>
	);
};

export default Home;
