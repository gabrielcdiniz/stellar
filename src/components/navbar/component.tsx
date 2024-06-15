import { Stack } from "@mui/joy";

import { Link } from "../link";

export function Navbar() {
  return (
    <Stack direction="row" gap={2} px={2}>
      <Link href="/credits">Créditos</Link>
    </Stack>
  );
}
