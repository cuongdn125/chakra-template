import { ChevronDownIcon, CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Box,
  Button,
  Center,
  Collapse,
  Flex,
  Icon,
  IconButton,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Spacer,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import logo from '../../assets/image/logo.svg';

const NavItems = [
  {
    label: 'Templates',
    children: [
      {
        label: 'Page Sections',
        subLabel: 'Large Page Sections like Hero, Features ...',
        href: '#',
      },
      {
        label: 'Blog',
        subLabel: 'A section regarding all blog elements',
        href: '#',
      },
      {
        label: 'Navigation',
        subLabel: 'Header Navigation for Websites & Apps',
        href: '#',
      },
      {
        label: 'Forms',
        subLabel: 'User Login & Newsletter Forms',
        href: '#',
      },
      {
        label: 'Components',
        subLabel: 'Smaller buildings blocks like Cards, Buttons, Result ...',
        href: '#',
      },
    ],
  },
  {
    label: 'Contribute',
    href: '#',
  },
  {
    label: 'GitHub',
    href: '#',
  },
  {
    label: 'Discord',
    href: '#',
  },
];

export default function NavBar() {
  const { isOpen, onToggle } = useDisclosure();
  //   console.log(isOpen);
  return (
    <Box>
      <Flex
        minH={'60px'}
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
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Center>

        <Center>
          <Box w={'40px'} mr={10}>
            <Image src={logo} />
          </Box>
          <Box
            display={{
              base: 'none',
              md: 'flex',
            }}
          >
            <DesktopNav />
          </Box>
        </Center>

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
      <Collapse in={isOpen}>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  return (
    <Flex>
      {NavItems.map((item, index) => (
        <Box key={index}>
          <Popover trigger="hover">
            <PopoverTrigger>
              <Link
                href={item?.href ? item?.href : '#'}
                textDecor={'none'}
                fontSize={'1rem'}
                color={'#4A5568'}
                mr={2}
                p={(2, 4)}
                cursor={'pointer'}
                _hover={{
                  textDecor: 'none',
                  color: '#1A202C',
                }}
              >
                {item.label}
              </Link>
            </PopoverTrigger>
            {item?.children && (
              <PopoverContent border={'none'} p={4} boxShadow="base">
                {item?.children.map((child, index) => (
                  <Link
                    key={index}
                    textDecor={'none'}
                    borderRadius={6}
                    _hover={{
                      bg: '#F0FFF4',
                      '& .navChildLabel': {
                        color: '#38A169',
                      },
                    }}
                  >
                    <Box p={2} cursor={'pointer'}>
                      <Text
                        fontSize={'1rem'}
                        fontWeight="bold"
                        className="navChildLabel"
                      >
                        {child.label}
                      </Text>
                      <Text fontSize={'0.8rem'}>{child.subLabel}</Text>
                    </Box>
                  </Link>
                ))}
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Flex>
  );
};

const MobileNav = () => {
  return (
    <Box w={'100%'}>
      {NavItems.map((item, index) => (
        <MobileItemNav item={item} key={index} />
      ))}
    </Box>
  );
};

const MobileItemNav = ({ item }) => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box>
      <Link
        href={item?.href ? item?.href : '#'}
        _hover={{
          textDecor: 'none',
        }}
      >
        <Flex cursor={'pointer'} p={2} onClick={item?.children && onToggle}>
          <Center>
            <Text fontSize={'1rem'} fontWeight="bold" color="#4A5568">
              {item.label}
            </Text>
          </Center>
          <Spacer />
          {item?.children && (
            <Center>
              <Icon
                as={ChevronDownIcon}
                transition={'all .25s ease-in-out'}
                transform={isOpen ? 'rotate(180deg)' : ''}
                w={6}
                h={6}
              />
            </Center>
          )}
        </Flex>
      </Link>

      {item?.children && (
        <Collapse in={isOpen} mt={1}>
          {item?.children.map((child, index) => (
            <Box key={index}>
              <Box
                ml={6}
                borderLeft="1px solid"
                borderColor="gray.200"
                px={2}
                py={2}
                _first={{
                  py: 1,
                }}
                _last={{
                  py: 1,
                }}
              >
                <Link
                  href={child.href}
                  ml={4}
                  fontSize={'1rem'}
                  _hover={{
                    textDecor: 'none',
                  }}
                >
                  {child.label}
                </Link>
              </Box>
            </Box>
          ))}
        </Collapse>
      )}
    </Box>
  );
};
