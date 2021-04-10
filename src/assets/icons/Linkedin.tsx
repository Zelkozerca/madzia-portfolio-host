import { IconComponentPropsType } from '@assets/icons/index';

const LinkedinIcon = ({ size, color, ...rest }: IconComponentPropsType) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M3.467 1.219c-1.65 0-2.729 1.083-2.729 2.507 0 1.393 1.047 2.507 2.666 2.507h.03c1.683 0 2.73-1.114 2.73-2.507C6.132 2.302 5.117 1.22 3.467 1.22zM1.023 8.214h4.824v14.511H1.023V8.215zM17.686 7.874c-2.602 0-4.347 2.445-4.347 2.445V8.213H8.515v14.511h4.823v-8.103c0-.434.032-.867.16-1.178.348-.866 1.142-1.763 2.474-1.763 1.745 0 2.444 1.33 2.444 3.281v7.763h4.822v-8.32c0-4.457-2.38-6.531-5.552-6.531z"
        fill={color}
      />
    </svg>
  );
};

export default LinkedinIcon;
