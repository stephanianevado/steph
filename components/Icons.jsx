import styled from 'styled-components'
import { pink } from './colors'

const Svg = styled.svg`
  &:hover path,
  &:active path {
    fill: ${pink};
    transition: background-color 0.5s;
  }
`

export const GitHubIcon = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path
        d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z"
        fill="#E6F1FF"
      />
    </Svg>
  )
}

export const LinkedinIcon = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.98 3.5C4.98 4.881 3.87 6 2.5 6C1.13 6 0.02 4.881 0.02 3.5C0.02 2.12 1.13 1 2.5 1C3.87 1 4.98 2.12 4.98 3.5ZM5 8H0V24H5V8ZM12.982 8H8.014V24H12.983V15.601C12.983 10.931 19.012 10.549 19.012 15.601V24H24V13.869C24 5.989 15.078 6.276 12.982 10.155V8Z"
        fill="#E6F1FF"
      />
    </Svg>
  )
}

export const InstagramIcon = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <path
          d="M12 2.163C15.204 2.163 15.584 2.175 16.85 2.233C20.102 2.381 21.621 3.924 21.769 7.152C21.827 8.417 21.838 8.797 21.838 12.001C21.838 15.206 21.826 15.585 21.769 16.85C21.62 20.075 20.105 21.621 16.85 21.769C15.584 21.827 15.206 21.839 12 21.839C8.796 21.839 8.416 21.827 7.151 21.769C3.891 21.62 2.38 20.07 2.232 16.849C2.174 15.584 2.162 15.205 2.162 12C2.162 8.796 2.175 8.417 2.232 7.151C2.381 3.924 3.896 2.38 7.151 2.232C8.417 2.175 8.796 2.163 12 2.163V2.163ZM12 0C8.741 0 8.333 0.014 7.053 0.072C2.695 0.272 0.273 2.69 0.073 7.052C0.014 8.333 0 8.741 0 12C0 15.259 0.014 15.668 0.072 16.948C0.272 21.306 2.69 23.728 7.052 23.928C8.333 23.986 8.741 24 12 24C15.259 24 15.668 23.986 16.948 23.928C21.302 23.728 23.73 21.31 23.927 16.948C23.986 15.668 24 15.259 24 12C24 8.741 23.986 8.333 23.928 7.053C23.732 2.699 21.311 0.273 16.949 0.073C15.668 0.014 15.259 0 12 0V0ZM12 5.838C8.597 5.838 5.838 8.597 5.838 12C5.838 15.403 8.597 18.163 12 18.163C15.403 18.163 18.162 15.404 18.162 12C18.162 8.597 15.403 5.838 12 5.838ZM12 16C9.791 16 8 14.21 8 12C8 9.791 9.791 8 12 8C14.209 8 16 9.791 16 12C16 14.21 14.209 16 12 16ZM18.406 4.155C17.61 4.155 16.965 4.8 16.965 5.595C16.965 6.39 17.61 7.035 18.406 7.035C19.201 7.035 19.845 6.39 19.845 5.595C19.845 4.8 19.201 4.155 18.406 4.155Z"
          fill="#E6F1FF"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  )
}

export const FacebookIcon = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 8H6V12H9V24H14V12H17.642L18 8H14V6.333C14 5.378 14.192 5 15.115 5H18V0H14.192C10.596 0 9 1.583 9 4.615V8Z"
        fill="#E6F1FF"
      />
    </Svg>
  )
}

export const TwitterIcon = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <path
          d="M24 4.55705C23.117 4.94905 22.168 5.21305 21.172 5.33205C22.189 4.72305 22.97 3.75805 23.337 2.60805C22.386 3.17205 21.332 3.58205 20.21 3.80305C19.313 2.84605 18.032 2.24805 16.616 2.24805C13.437 2.24805 11.101 5.21405 11.819 8.29305C7.728 8.08805 4.1 6.12805 1.671 3.14905C0.381 5.36205 1.002 8.25705 3.194 9.72305C2.388 9.69705 1.628 9.47605 0.965 9.10705C0.911 11.388 2.546 13.522 4.914 13.997C4.221 14.185 3.462 14.229 2.69 14.081C3.316 16.037 5.134 17.46 7.29 17.5C5.22 19.123 2.612 19.848 0 19.54C2.179 20.937 4.768 21.752 7.548 21.752C16.69 21.752 21.855 14.031 21.543 7.10605C22.505 6.41105 23.34 5.54405 24 4.55705V4.55705Z"
          fill="#E6F1FF"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  )
}
export const CodepenIcon = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <path
          d="M23.5446 7.48706L12.5759 0.174561C12.2015 -0.0558292 11.8019 -0.0579385 11.4241 0.174561L0.455344 7.48706C0.174094 7.67451 0 8.00939 0 8.34417V15.6566C0 15.9915 0.174094 16.3263 0.455391 16.5138L11.4241 23.8273C11.7985 24.0577 12.1981 24.0598 12.5759 23.8273L23.5447 16.5138C23.8259 16.3263 24 15.9915 24 15.6566V8.34417C24 8.00939 23.8259 7.67451 23.5446 7.48706V7.48706ZM13.0312 2.9602L21.1072 8.34417L17.5045 10.7549L13.0312 7.76826V2.9602ZM10.9688 2.9602V7.76826L6.49552 10.7549L2.89284 8.34417L10.9688 2.9602ZM2.0625 10.2727L4.64733 12.0004L2.0625 13.7281V10.2727ZM10.9688 21.0406L2.89284 15.6567L6.49552 13.2459L10.9688 16.2326V21.0406ZM12 14.4379L8.35711 12.0004L12 9.56292L15.6429 12.0004L12 14.4379ZM13.0312 21.0406V16.2326L17.5045 13.2459L21.1072 15.6567L13.0312 21.0406ZM21.9375 13.7281L19.3527 12.0004L21.9375 10.2727V13.7281Z"
          fill="#E6F1FF"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  )
}

export const EmailIcon = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
      <path
        d="M12.042 23.6481C4.229 23.6481 0 18.7721 0 12.4771C0 5.75005 4.762 0.352051 13.276 0.352051C19.49 0.352051 24 4.39005 24 9.95305C24 18.6651 13.67 20.9651 14.188 15.9951C13.478 17.1031 12.334 18.3491 10.135 18.3491C7.619 18.3491 6.055 16.5071 6.055 13.5421C6.055 9.09805 8.976 5.34305 12.434 5.34305C14.093 5.34305 15.234 6.21905 15.711 7.56405L16.175 5.93205H18.513C18.269 6.76405 16.192 14.4591 16.192 14.4591C15.544 17.1251 17.542 17.1721 19.314 15.7561C22.643 13.1761 22.815 6.42905 18.316 3.61505C13.495 0.724051 2.521 2.51305 2.521 12.3081C2.521 17.9191 6.471 21.6891 12.35 21.6891C15.786 21.6891 17.892 20.7591 19.645 19.7411L20.822 21.4391C19.111 22.4051 16.361 23.6481 12.042 23.6481ZM9.698 9.34305C8.983 10.6831 8.521 12.4191 8.521 13.7671C8.521 17.3771 12.043 17.4001 13.773 14.0061C14.485 12.6121 14.944 10.8351 14.944 9.47705C14.944 6.56005 11.449 6.04305 9.698 9.34305V9.34305Z"
        fill="#E6F1FF"
      />
      </g>
    </Svg>
  )
}
//export const PictureIcon = () =>{
  //return ()
//}
