import React, { useEffect } from 'react';

interface InstagramEmbedProps {
  permalink: string;
}

const InstagramEmbed: React.FC<InstagramEmbedProps> = ({ permalink }) => {
  useEffect(() => {
    // Load Instagram embed script if not already loaded
    if (!(window as any).instgrm) {
      const script = document.createElement('script');
      script.async = true;
      script.src = '//www.instagram.com/embed.js';
      script.onload = () => {
        if ((window as any).instgrm) {
          (window as any).instgrm.Embeds.process();
        }
      };
      document.body.appendChild(script);
    } else {
      // If script is already loaded, process new embeds
      (window as any).instgrm.Embeds.process();
    }
  }, [permalink]);

  const embedStyle: React.CSSProperties = {
    background: '#FFF',
    border: 0,
    borderRadius: '3px',
    boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
    margin: '1px',
    maxWidth: '540px',
    minWidth: '326px',
    padding: 0,
    width: '99.375%'
  };

  const linkStyle: React.CSSProperties = {
    background: '#FFFFFF',
    lineHeight: 0,
    padding: '0 0',
    textAlign: 'center',
    textDecoration: 'none',
    width: '100%'
  };

  const flexRowStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  };

  const avatarStyle: React.CSSProperties = {
    backgroundColor: '#F4F4F4',
    borderRadius: '50%',
    flexGrow: 0,
    height: '40px',
    marginRight: '14px',
    width: '40px'
  };

  const flexColumnStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'center'
  };

  const titleBarStyle: React.CSSProperties = {
    backgroundColor: '#F4F4F4',
    borderRadius: '4px',
    flexGrow: 0,
    height: '14px',
    marginBottom: '6px',
    width: '100px'
  };

  const subtitleBarStyle: React.CSSProperties = {
    backgroundColor: '#F4F4F4',
    borderRadius: '4px',
    flexGrow: 0,
    height: '14px',
    width: '60px'
  };

  const paddingStyle: React.CSSProperties = {
    padding: '19% 0'
  };

  const svgContainerStyle: React.CSSProperties = {
    display: 'block',
    height: '50px',
    margin: '0 auto 12px',
    width: '50px'
  };

  const textStyle: React.CSSProperties = {
    color: '#3897f0',
    fontFamily: 'Arial,sans-serif',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 550,
    lineHeight: '18px'
  };

  const paddingTopStyle: React.CSSProperties = {
    paddingTop: '8px'
  };

  const paddingBottomStyle: React.CSSProperties = {
    padding: '12.5% 0'
  };

  const iconRowStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '14px',
    alignItems: 'center'
  };

  const dot1Style: React.CSSProperties = {
    backgroundColor: '#F4F4F4',
    borderRadius: '50%',
    height: '12.5px',
    width: '12.5px',
    transform: 'translateX(0px) translateY(7px)'
  };

  const dot2Style: React.CSSProperties = {
    backgroundColor: '#F4F4F4',
    height: '12.5px',
    transform: 'rotate(-45deg) translateX(3px) translateY(1px)',
    width: '12.5px',
    flexGrow: 0,
    marginRight: '14px',
    marginLeft: '2px'
  };

  const dot3Style: React.CSSProperties = {
    backgroundColor: '#F4F4F4',
    borderRadius: '50%',
    height: '12.5px',
    width: '12.5px',
    transform: 'translateX(9px) translateY(-18px)'
  };

  const iconCenterStyle: React.CSSProperties = {
    marginLeft: '8px'
  };

  const centerDotStyle: React.CSSProperties = {
    backgroundColor: '#F4F4F4',
    borderRadius: '50%',
    flexGrow: 0,
    height: '20px',
    width: '20px'
  };

  const triangleStyle: React.CSSProperties = {
    width: 0,
    height: 0,
    borderTop: '2px solid transparent',
    borderLeft: '6px solid #f4f4f4',
    borderBottom: '2px solid transparent',
    transform: 'translateX(16px) translateY(-4px) rotate(30deg)'
  };

  const rightIconStyle: React.CSSProperties = {
    marginLeft: 'auto'
  };

  const triangle1Style: React.CSSProperties = {
    width: '0px',
    borderTop: '8px solid #F4F4F4',
    borderRight: '8px solid transparent',
    transform: 'translateY(16px)'
  };

  const rectStyle: React.CSSProperties = {
    backgroundColor: '#F4F4F4',
    flexGrow: 0,
    height: '12px',
    width: '16px',
    transform: 'translateY(-4px)'
  };

  const triangle2Style: React.CSSProperties = {
    width: 0,
    height: 0,
    borderTop: '8px solid #F4F4F4',
    borderLeft: '8px solid transparent',
    transform: 'translateY(-4px) translateX(8px)'
  };

  const contentStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'center',
    marginBottom: '24px'
  };

  const textBar1Style: React.CSSProperties = {
    backgroundColor: '#F4F4F4',
    borderRadius: '4px',
    flexGrow: 0,
    height: '14px',
    marginBottom: '6px',
    width: '224px'
  };

  const textBar2Style: React.CSSProperties = {
    backgroundColor: '#F4F4F4',
    borderRadius: '4px',
    flexGrow: 0,
    height: '14px',
    width: '144px'
  };

  const captionStyle: React.CSSProperties = {
    color: '#c9c8cd',
    fontFamily: 'Arial,sans-serif',
    fontSize: '14px',
    lineHeight: '17px',
    marginBottom: 0,
    marginTop: '8px',
    overflow: 'hidden',
    padding: '8px 0 7px',
    textAlign: 'center',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  };

  const captionLinkStyle: React.CSSProperties = {
    color: '#c9c8cd',
    fontFamily: 'Arial,sans-serif',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: '17px',
    textDecoration: 'none'
  };

  return (
    <blockquote 
      className="instagram-media" 
      data-instgrm-permalink={permalink}
      data-instgrm-version="14" 
      style={embedStyle}
    >
      <div style={{ padding: '16px' }}>
        <a 
          href={permalink}
          style={linkStyle}
          target="_blank" 
          rel="noopener noreferrer"
        >
          <div style={flexRowStyle}>
            <div style={avatarStyle}></div>
            <div style={flexColumnStyle}>
              <div style={titleBarStyle}></div>
              <div style={subtitleBarStyle}></div>
            </div>
          </div>
          <div style={paddingStyle}></div>
          <div style={svgContainerStyle}>
            <svg 
              width="50px" 
              height="50px" 
              viewBox="0 0 60 60" 
              version="1.1" 
              xmlns="http://www.w3.org/2000/svg" 
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                  <g>
                    <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <div style={paddingTopStyle}>
            <div style={textStyle}>Wyświetl ten post na Instagramie</div>
          </div>
          <div style={paddingBottomStyle}></div>
          <div style={iconRowStyle}>
            <div>
              <div style={dot1Style}></div>
              <div style={dot2Style}></div>
              <div style={dot3Style}></div>
            </div>
            <div style={iconCenterStyle}>
              <div style={centerDotStyle}></div>
              <div style={triangleStyle}></div>
            </div>
            <div style={rightIconStyle}>
              <div style={triangle1Style}></div>
              <div style={rectStyle}></div>
              <div style={triangle2Style}></div>
            </div>
          </div>
          <div style={contentStyle}>
            <div style={textBar1Style}></div>
            <div style={textBar2Style}></div>
          </div>
        </a>
        <p style={captionStyle}>
          <a 
            href={permalink}
            style={captionLinkStyle}
            target="_blank" 
            rel="noopener noreferrer"
          >
            Post udostępniony przez 🎁 | ХУДИ | ХАЛАТЫ | ПОЛОТЕНЦА | 🎁 (@rusan.by)
          </a>
        </p>
      </div>
    </blockquote>
  );
};

export default InstagramEmbed;