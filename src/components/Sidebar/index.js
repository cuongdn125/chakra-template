import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Drawer,
  DrawerOverlay,
  Spacer,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Icon,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
} from 'react-icons/fi';
import logo from '../../assets/image/logo.svg';

const LinkItems = [
  { name: 'Home', icon: FiHome },
  { name: 'Trending', icon: FiTrendingUp },
  { name: 'Explore', icon: FiCompass },
  { name: 'Favourites', icon: FiStar },
  { name: 'Settings', icon: FiSettings },
];

export default function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Flex>
        <Box
          display={{
            base: 'none',
            md: 'block',
          }}
        >
          <SideBarDesktop />
        </Box>
        <Box flex={1}>
          <Box h={'60px'} bg={'gray.100'} w={'100%'}>
            <Flex
              h={'100%'}
              w="100%"
              bg="white"
              borderBottom="1px solid"
              borderColor="gray.200"
              px={4}
              justifyContent="space-between"
            >
              <Center
                display={{
                  base: 'flex',
                  md: 'none',
                }}
              >
                <IconButton
                  mr={2}
                  onClick={onOpen}
                  icon={<HamburgerIcon w={5} h={5} />}
                  variant={'ghost'}
                  aria-label={'Toggle Navigation'}
                />
                <Box w={'40px'} mr={10}>
                  <Image src={logo} />
                </Box>
                <Box
                  display={{
                    base: 'none',
                    md: 'flex',
                  }}
                ></Box>
              </Center>
              <Spacer />

              <Center>
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={'full'}
                    variant={'link'}
                    cursor={'pointer'}
                    minW={0}
                  >
                    <Avatar
                      w="32px"
                      h="32px"
                      src={
                        'https://img1.kienthucvui.vn/uploads/2019/10/10/anh-chibi-naruto_110701874.jpg'
                      }
                    />
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Settings</MenuItem>
                    <MenuDivider />
                    <MenuItem>Logout</MenuItem>
                  </MenuList>
                </Menu>
              </Center>
            </Flex>
          </Box>
        </Box>
      </Flex>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="full">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Flex alignItems="center" mx={'16px'} px={'16px'}>
              <Box w={'50px'}>
                <Image src={logo} />
              </Box>
            </Flex>
          </DrawerHeader>

          <DrawerBody>
            {LinkItems.map((item, index) => (
              <Box key={index} mx={'16px'} h={'56px'}>
                <Flex
                  h={'100%'}
                  p={'16px'}
                  cursor={'pointer'}
                  _hover={{
                    bg: '#0BC5EA',
                    color: 'white',
                    borderRadius: '8px',
                  }}
                >
                  <Center>
                    <Icon as={item.icon} mr={'16px'} />
                    <Box>{item.name}</Box>
                  </Center>
                </Flex>
              </Box>
            ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

const SideBarDesktop = () => {
  return (
    <Box
      minH={'100vh'}
      bg={'white'}
      w={'240px'}
      borderRight={'1px solid '}
      borderColor={'gray.200'}
    >
      <Flex w={'50px'} h={'80px'} alignItems="center" mx={'32px'}>
        <Image src={logo} />
      </Flex>
      {LinkItems.map((item, index) => (
        <Box key={index} mx={'16px'} h={'56px'}>
          <Flex
            h={'100%'}
            p={'16px'}
            cursor={'pointer'}
            _hover={{
              bg: '#0BC5EA',
              color: 'white',
              borderRadius: '8px',
            }}
          >
            <Center>
              <Icon as={item.icon} mr={'16px'} />
              <Box>{item.name}</Box>
            </Center>
          </Flex>
        </Box>
      ))}
    </Box>
  );
};
