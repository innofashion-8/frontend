import ShinyText from '@/components/About';

export default function Home() {
  return (
    <main
      style={{
        maxWidth: '800px',
        margin: '80px auto',
        padding: '0 32px',
        lineHeight: '1.8',
        fontSize: '1.1rem',
      }}
    >
      <ShinyText
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        speed={2}
        delay={0}
        color="#b5b5b5"
        shineColor="#ffffff"
        spread={120}
        direction="left"
        yoyo={false}
        pauseOnHover={false}
        disabled={false}
      />
    </main>
  );
}