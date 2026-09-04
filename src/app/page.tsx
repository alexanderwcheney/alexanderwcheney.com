const branches = [
  { label: "Mind", x: 80 },
  { label: "Body", x: 240 },
  { label: "Spirit", x: 400 },
  { label: "Heart", x: 560 },
  { label: "Work", x: 720 },
];

const root = { x: 400, y: 380 };
const branchY = 120;

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-12 px-6 py-16">
      <h1 className="font-serif text-4xl md:text-6xl text-center text-balance">
        welcome to my branches of life
      </h1>

      <svg
        viewBox="0 0 800 460"
        role="img"
        aria-label="Graph of five branches — Mind, Body, Spirit, Heart, and Work — growing from a single root node"
        className="w-full max-w-3xl"
      >
        {branches.map(({ label, x }) => (
          <g key={label}>
            <path
              d={`M ${root.x} ${root.y} C ${root.x} ${root.y - 120}, ${x} ${
                branchY + 120
              }, ${x} ${branchY}`}
              fill="none"
              stroke="#57534e"
              strokeWidth="2"
            />
            <circle cx={x} cy={branchY} r="8" fill="#f59e0b" />
            <text
              x={x}
              y={branchY - 24}
              textAnchor="middle"
              fill="#e7e5e4"
              className="font-serif"
              fontSize="22"
            >
              {label}
            </text>
          </g>
        ))}

        <circle cx={root.x} cy={root.y} r="12" fill="#e7e5e4" />
        <text
          x={root.x}
          y={root.y + 40}
          textAnchor="middle"
          fill="#a8a29e"
          className="font-serif"
          fontSize="20"
        >
          root
        </text>
      </svg>
    </main>
  );
};

export default Home;
