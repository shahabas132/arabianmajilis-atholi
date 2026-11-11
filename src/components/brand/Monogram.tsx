import React from 'react';

interface MonogramProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export const Monogram: React.FC<MonogramProps> = ({ className = "w-12 h-12", ...props }) => {
  return (
    <svg
      viewBox="320 215 160 135"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <g>
        <path transform="matrix(1,0,0,-1,332.533,222.35599)" d="M0 0C-4.659-2.724-8.153-4.758-10.482-6.1V-16.491C-5.824-13.807-2.33-11.793 0-10.451Z" fill="currentColor" />

<path transform="matrix(1,0,0,-1,360.13,277.662)" d="M0 0C-4.693-2.687-8.221-4.711-10.55-6.036-12.825-4.711-15.863-2.973-17.064-2.311V32.223L-27.596 26.151V9.78C-27.596 9.78-25.41 3.833-17.064 3.403-26.826-4.066-27.596-4.657-27.596-4.657-27.596-4.657-38.074-.717-38.074 3.726V23.267C-35.746 24.61-32.253 26.652-27.596 29.375L-17.064 35.411V49.215C-21.721 51.902-25.231 53.926-27.596 55.305-22.903 57.992-19.392 60.016-17.064 61.359-12.407 58.673-8.896 56.649-6.567 55.305V3.726C-4.239 2.382-1.182 .663 0 0" fill="currentColor" />

<path transform="matrix(1,0,0,-1,420.212,225.78)" d="M0 0C1.184-.672 2.942-1.679 5.27-3.02V-57.559C7.6-56.218 11.113-54.205 15.812-51.52V3.079C14.627 3.75 12.85 4.757 10.482 6.099 8.151 4.757 4.659 2.724 0 0" fill="currentColor" />

<path transform="matrix(1,0,0,-1,436.023,222.70099)" d="M0 0C2.329-1.382 5.822-3.415 10.481-6.099V-25.519C8.817-26.486 6.912-27.589 4.744-28.839 6.201-29.678 8.113-30.78 10.481-32.145V-60.638C12.81-59.297 16.304-57.284 20.962-54.599V-31.585C22.396-30.765 23.996-29.849 25.766-28.839 24.512-28.116 22.903-27.186 20.962-26.063V0C18.633 1.342 15.139 3.355 10.481 6.04 8.152 4.698 4.658 2.684 0 0" fill="currentColor" />

<path transform="matrix(1,0,0,-1,467.467,216.66101)" d="M0 0C-2.329-1.343-5.823-3.356-10.481-6.04-8.152-7.422-4.658-9.455 0-12.139V-66.679C2.329-65.337 5.823-63.324 10.482-60.639V-6.04C8.152-4.699 4.658-2.685 0 0" fill="currentColor" />

<path transform="matrix(1,0,0,-1,390.171,244.655)" strokeWidth=".5" strokeLinecap="butt" strokeMiterlimit="10" strokeLinejoin="miter" fill="none" stroke="currentColor" d="M0 0V-18.19" />

<path transform="matrix(1,0,0,-1,399.266,253.75)" strokeWidth=".5" strokeLinecap="butt" strokeMiterlimit="10" strokeLinejoin="miter" fill="none" stroke="currentColor" d="M0 0H-18.19" />

      </g>
    </svg>
  );
};

export default Monogram;
