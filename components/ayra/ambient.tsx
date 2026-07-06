export function Ambient() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(127,166,224,0.10),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_80%,rgba(111,143,192,0.08),transparent_50%)]" />
      <div className="animate-beam absolute -left-1/3 -top-1/4 h-[160%] w-2/3 bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.05),transparent)] blur-3xl" />
      {/* subtle grain / fog */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(127,166,224,0.06),transparent_60%)]" />
    </div>
  )
}
