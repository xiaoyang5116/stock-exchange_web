import { Box, Stack } from '@chakra-ui/react';
import SvgIcon from './SvgIcon';

const navData = [
  { key: 1, icon: "help", title: "客服" },
  { key: 2, icon: "trade", title: "客服" },
  { key: 3, icon: "academic", title: "客服" },
  { key: 4, icon: "profile", title: "客服" },
  { key: 5, icon: "analytics", title: "客服" },
  { key: 6, icon: "top", title: "客服" },
  { key: 7, icon: "trading-signals", title: "客服" },
  { key: 8, icon: "market", title: "客服" },
];

const Nav = () => {
  return (
    <Box pt={"20px"} >
      <Stack spacing={"30px"} justify={"center"} alignItems={"center"} >
        <SvgIcon name={"burger-light"} color='#a0002a' />
        {navData.map(item => <SvgIcon name={item.icon} key={item.key} color='#a0002a' />)}
      </Stack>
    </Box>

  )
}

export default Nav