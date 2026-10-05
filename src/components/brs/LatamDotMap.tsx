export const LatamDotMap = () => (
  <div
    className="brs-dot-map pointer-events-none select-none absolute inset-0"
    aria-hidden="true"
  >
    {/* Keep the decorative grid out of both HTML and the RSC payload. */}
    <style>{`
      .brs-dot-map {
        background-image: url('/brs-latam-dot-map.svg');
        background-size: 100% 100%;
        background-repeat: no-repeat;
      }
      @media (prefers-reduced-motion: reduce) {
        .brs-dot-map {
          background-image: url('/brs-latam-dot-map.svg#reduced-motion');
        }
      }
    `}</style>
  </div>
)
