import CustomLink from '@/components/CustomLink';
import SocialIcon from '@/components/SocialIcon';
import { footerConfigs } from '@/configs/footerConfigs';

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon
            kind="mail"
            href={`mailto:${footerConfigs.socialLink.email}`}
          />
          <SocialIcon kind="github" href={footerConfigs.socialLink.github} />
          <SocialIcon
            kind="facebook"
            href={footerConfigs.socialLink.instagram}
          />
          <SocialIcon
            kind="linkedin"
            href={footerConfigs.socialLink.linkedin}
          />
          <SocialIcon kind="twitter" href={footerConfigs.socialLink.twitter} />
        </div>
        <div className="mb-8 flex space-x-2 text-sm text-gray-500 transition-colors dark:text-gray-400">
          <div>{`Copyright © 2023 - ${new Date().getFullYear()}`}</div>
          <CustomLink href="/">{footerConfigs.credot}</CustomLink>
        </div>
      </div>
    </footer>
  );
}