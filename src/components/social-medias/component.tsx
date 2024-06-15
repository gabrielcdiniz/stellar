import { Stack, IconButton } from "@mui/joy";
import { alpha } from "@mui/system";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "../link";

const GITHUB_URL = "https://github.com/gabrielcdiniz";
const LINKEDIN_URL = "https://www.linkedin.com/in/gabriel-dinizz/";

export function SocialMedias() {
  const socialMedias = [
    {
      icon: faGithub,
      url: GITHUB_URL,
    },
    {
      icon: faLinkedin,
      url: LINKEDIN_URL,
    },
  ];

  return (
    <Stack gap={1} direction="row">
      {socialMedias.map(({ icon, url }) => (
        <Link key={url} href={url} target="_blank" rel="noopener">
          <IconButton
            size="lg"
            color="primary"
            sx={{
              "&:hover": {
                backgroundColor: (theme) =>
                  alpha(theme.palette.primary[500], 0.2),
              },

              "&:active": {
                backgroundColor: (theme) =>
                  alpha(theme.palette.primary[500], 0.4),
              },
            }}
          >
            <FontAwesomeIcon icon={icon} />
          </IconButton>
        </Link>
      ))}
    </Stack>
  );
}
