import {
  Box,
  Flex,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Text,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.png";
const Navbar = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        bg={"white"}
        px={{ base: 4, md: 8 }}
        borderBottom={"1px solid gray"}
        position={"fixed"}
        top={0}
        w={"100%"}
        zIndex={4}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            aria-label="Open Menu"
            icon={<HamburgerIcon />}
            display={{ base: "flex", md: "none" }}
            onClick={onOpen}
          />
          <Box
            display={{ md: "none" }}
            onClick={() => {
              navigate("/");
            }}
            _hover={{ cursor: "pointer" }}
          >
            <Image src={logo} width={"175px"}></Image>
          </Box>
          <Flex
            display={{ base: "none", md: "flex" }}
            align={"center"}
            justify={"space-between"}
            w={"100%"}
          >
            <Box
              onClick={() => {
                navigate("/");
              }}
              _hover={{ cursor: "pointer" }}
            >
              <Image src={logo} width={"175px"}></Image>
            </Box>
            <Box
              mx="auto"
              gap={{ md: "40px" }}
              display={{ base: "none", md: "flex" }}
            >
              <NavLink
                _hover={{ cursor: "pointer" }}
                to={"/"}
                style={({ isActive }) => ({
                  fontWeight: 600,
                  color: isActive ? "#2a68a2" : "#4A5568",
                  textDecoration: "none",
                })}
              >
                Chart
              </NavLink>

              <NavLink
                _hover={{ cursor: "pointer" }}
                to={"/addActivity"}
                style={({ isActive }) => ({
                  fontWeight: 600,
                  color: isActive ? "#2a68a2" : "#4A5568",
                  textDecoration: "none",
                })}
              >
                Add Activity
              </NavLink>
            </Box>
          </Flex>
        </Flex>
      </Box>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Text
              w="100%"
              mb={2}
              _hover={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/");
                onClose();
              }}
            >
              Chart
            </Text>
            <Text
              w="100%"
              mb={2}
              _hover={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/addActivity");
                onClose();
              }}
            >
              Add Activity
            </Text>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export { Navbar };
