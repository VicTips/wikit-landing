import React from 'react'

const Footer = () => {
  return (
    <section className='flex items-center flex-col gap-8 mt-12 mb-4'>
      <img src='https://res.cloudinary.com/ds90phfgd/image/upload/v1664642931/wikit/wikit-log_l4zczr.png' alt='wikit' />
      <div className='flex gap-6 font-extrabold'>
        <div>Features</div>
        <div>Pricing</div>
        <div>Blog</div>
        <div>What's new?</div>
      </div>
      {/* Divider */}
      <div className='w-[40px] h-[3px] bg-black'></div>
      {/* Social icons */}
      <div className='flex gap-6 items-center'>
        {/* Twitter logo */}
        <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.1007 2.35408C15.5007 2.61946 14.8674 2.78532 14.2008 2.88484C14.8674 2.48677 15.4007 1.8565 15.634 1.09353C15.0007 1.45843 14.3008 1.72381 13.5341 1.88967C12.9342 1.2594 12.0676 0.861328 11.1343 0.861328C9.33438 0.861328 7.8678 2.32091 7.8678 4.11221C7.8678 4.37759 7.90113 4.6098 7.96779 4.842C5.26794 4.70931 2.83474 3.41559 1.2015 1.42526C0.934849 1.92284 0.768192 2.4536 0.768192 3.0507C0.768192 4.17856 1.33483 5.17373 2.23478 5.77083C1.70147 5.73765 1.2015 5.60497 0.734861 5.37276V5.40593C0.734861 6.9982 1.86813 8.32509 3.36805 8.62364C3.1014 8.68999 2.80141 8.72316 2.50143 8.72316C2.30144 8.72316 2.06812 8.68999 1.86813 8.65682C2.30144 9.95053 3.50137 10.9125 4.93463 10.9125C3.80136 11.775 2.40143 12.3058 0.868186 12.3058C0.601535 12.3058 0.334883 12.3058 0.101562 12.2726C1.56815 13.2014 3.26805 13.7322 5.13462 13.7322C11.1676 13.7322 14.4674 8.75633 14.4674 4.44393C14.4674 4.31125 14.4674 4.14538 14.4674 4.0127C15.1007 3.58146 15.6674 3.01753 16.1007 2.35408Z" fill="#27272A" />
        </svg>
        {/* Facebook logo */}
        <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.11439 17.6362V9.72246H0.438477V6.63832H3.11439V4.36386C3.11439 1.72436 4.73424 0.287109 7.10015 0.287109C8.23345 0.287109 9.20746 0.371083 9.49131 0.408616V3.16704L7.85042 3.16778C6.56371 3.16778 6.31457 3.77629 6.31457 4.66923V6.63832H9.38326L8.9837 9.72246H6.31456V17.6362H3.11439Z" fill="#18181B" />
        </svg>
        {/* Instagram logo */}
        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.5286 1.7394C13.1183 1.7394 13.425 1.74906 14.4481 1.79548C15.0632 1.80297 15.6725 1.91538 16.2494 2.12783C16.6678 2.28841 17.0477 2.5344 17.3648 2.84997C17.6819 3.16554 17.9291 3.54369 18.0904 3.96008C18.3039 4.53427 18.4169 5.14063 18.4244 5.75281C18.4706 6.77098 18.4807 7.07621 18.4807 9.65359C18.4807 12.231 18.471 12.5362 18.4244 13.5544C18.4169 14.1666 18.3039 14.7729 18.0904 15.3471C17.9291 15.7635 17.6819 16.1416 17.3648 16.4572C17.0477 16.7728 16.6678 17.0188 16.2494 17.1794C15.6725 17.3918 15.0632 17.5042 14.4481 17.5117C13.4255 17.5577 13.1188 17.5678 10.5286 17.5678C7.93834 17.5678 7.63166 17.5581 6.60906 17.5117C5.99394 17.5042 5.38467 17.3918 4.80773 17.1794C4.38934 17.0188 4.00937 16.7728 3.69229 16.4572C3.37521 16.1416 3.12803 15.7635 2.96668 15.3471C2.75322 14.7729 2.64027 14.1666 2.63274 13.5544C2.58655 12.5362 2.57639 12.231 2.57639 9.65359C2.57639 7.07621 2.58609 6.77098 2.63274 5.75281C2.64027 5.14063 2.75322 4.53427 2.96668 3.96008C3.12803 3.54369 3.37521 3.16554 3.69229 2.84997C4.00937 2.5344 4.38934 2.28841 4.80773 2.12783C5.38467 1.91538 5.99394 1.80297 6.60906 1.79548C7.63212 1.74952 7.93881 1.7394 10.5286 1.7394ZM10.5286 0C7.89585 0 7.56422 0.0110321 6.52961 0.0579188C5.72458 0.0738547 4.92809 0.225553 4.17403 0.50656C3.52717 0.749114 2.94127 1.12922 2.45723 1.62035C1.96329 2.10226 1.58104 2.68568 1.33717 3.32987C1.05481 4.08033 0.902387 4.87302 0.886375 5.6742C0.840187 6.70295 0.829102 7.033 0.829102 9.65313C0.829102 12.2733 0.840187 12.6033 0.887298 13.633C0.903311 14.4342 1.05574 15.2269 1.33809 15.9773C1.58169 16.6214 1.96363 17.2048 2.45723 17.6868C2.94154 18.1781 3.52776 18.5582 4.17495 18.8006C4.92902 19.0816 5.7255 19.2333 6.53054 19.2493C7.56515 19.2952 7.89539 19.3072 10.5295 19.3072C13.1636 19.3072 13.4938 19.2962 14.5284 19.2493C15.3335 19.2333 16.13 19.0816 16.884 18.8006C17.5281 18.5521 18.1131 18.1726 18.6014 17.6863C19.0897 17.2 19.4707 16.6176 19.72 15.9764C20.0023 15.2259 20.1547 14.4333 20.1707 13.6321C20.2169 12.6033 20.228 12.2733 20.228 9.65313C20.228 7.033 20.2169 6.70295 20.1698 5.67329C20.1538 4.8721 20.0014 4.07941 19.719 3.32895C19.4754 2.68485 19.0935 2.10143 18.5999 1.61943C18.1156 1.12819 17.5294 0.748076 16.8822 0.50564C16.1281 0.224633 15.3316 0.0729354 14.5266 0.0569995C13.4929 0.0110322 13.1613 0 10.5286 0Z" fill="#27272A" />
          <path d="M10.5268 4.69629C9.54167 4.69629 8.57867 4.98702 7.75956 5.53171C6.94046 6.07641 6.30204 6.8506 5.92505 7.7564C5.54806 8.66219 5.44942 9.6589 5.64161 10.6205C5.8338 11.5821 6.30818 12.4653 7.00477 13.1586C7.70137 13.8519 8.58888 14.324 9.55508 14.5153C10.5213 14.7065 11.5228 14.6084 12.4329 14.2332C13.3431 13.858 14.121 13.2226 14.6683 12.4074C15.2156 11.5922 15.5077 10.6338 15.5077 9.6534C15.5077 8.3387 14.9829 7.07783 14.0488 6.14819C13.1147 5.21856 11.8478 4.69629 10.5268 4.69629ZM10.5268 12.8711C9.88735 12.8711 9.26225 12.6824 8.73056 12.3288C8.19887 11.9753 7.78447 11.4727 7.53976 10.8848C7.29505 10.2968 7.23102 9.64983 7.35577 9.02566C7.48053 8.40148 7.78846 7.82814 8.24062 7.37814C8.69278 6.92813 9.26888 6.62168 9.89605 6.49752C10.5232 6.37336 11.1733 6.43708 11.7641 6.68063C12.3549 6.92417 12.8598 7.33659 13.2151 7.86574C13.5703 8.39489 13.76 9.017 13.76 9.6534C13.76 10.5068 13.4193 11.3252 12.813 11.9287C12.2067 12.5321 11.3843 12.8711 10.5268 12.8711Z" fill="#27272A" />
          <path d="M15.705 5.65855C16.3478 5.65855 16.8689 5.13993 16.8689 4.50017C16.8689 3.86042 16.3478 3.3418 15.705 3.3418C15.0621 3.3418 14.541 3.86042 14.541 4.50017C14.541 5.13993 15.0621 5.65855 15.705 5.65855Z" fill="#27272A" />
        </svg>
        {/* Github logo */}
        <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M9.84351 0C4.70191 0 0.56543 4.11672 0.56543 9.23377C0.56543 13.312 3.23288 16.7747 6.90545 18.0058C7.36935 18.0828 7.52399 17.8135 7.52399 17.5442C7.52399 17.3133 7.52399 16.7362 7.52399 15.9667C4.93386 16.5438 4.39264 14.7356 4.39264 14.7356C3.96739 13.6583 3.34885 13.389 3.34885 13.389C2.49836 12.8119 3.42617 12.8119 3.42617 12.8119C4.35398 12.8888 4.85654 13.7737 4.85654 13.7737C5.66837 15.1972 7.02142 14.774 7.56265 14.5432C7.63996 13.9276 7.87191 13.5429 8.14253 13.312C6.09362 13.0812 3.92873 12.2732 3.92873 8.7336C3.92873 7.73328 4.27666 6.88685 4.8952 6.27127C4.81788 6.04042 4.46995 5.11704 4.97252 3.80893C4.97252 3.80893 5.74569 3.57808 7.52399 4.77078C8.2585 4.57841 9.07033 4.46299 9.84351 4.46299C10.6167 4.46299 11.4285 4.57841 12.163 4.77078C13.9413 3.57808 14.7145 3.80893 14.7145 3.80893C15.2171 5.07857 14.9078 6.00195 14.7918 6.27127C15.3717 6.92532 15.7583 7.73328 15.7583 8.7336C15.7583 12.2732 13.5934 13.0427 11.5058 13.2735C11.8538 13.5429 12.1244 14.12 12.1244 14.9664C12.1244 16.1976 12.1244 17.1979 12.1244 17.5057C12.1244 17.7365 12.279 18.0443 12.7816 17.9674C16.4541 16.7747 19.1216 13.312 19.1216 9.23377C19.1216 4.11672 14.9851 0 9.84351 0Z" fill="#27272A" />
        </svg>
      </div>
      <div className='text-[0.875rem]'>
        © Copyright 2021, All Rights Reserved
      </div>
    </section>
  )
}

export default Footer
