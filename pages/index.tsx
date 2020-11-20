import { useState } from "react";
import { Heading, Grid, Flex, Link, Button, Text } from "@chakra-ui/react";
import { FiMail, FiLock, FiEye, FiGithub, FiEyeOff } from "react-icons/fi";

import Head from "next/head";

import Divider from "../components/Divider";
import Input from "../components/Input";

export default function Home() {
  const [passwordHide, setPasswordHide] = useState(false);
  const [focusBtn, setFocusBtn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Head>
        <title>Login | skylab</title>
        <link rel="shortcut icon" type="image/png" href="/favicon.png" />
      </Head>
      <Grid
        as="main"
        height="100vh"
        templateColumns={{ base: "1fr", lg: "1fr 480px 480px 1fr" }}
        templateRows={{ base: "1fr 1fr", lg: "1fr 480px 1fr" }}
        templateAreas={{
          base: "'logo' 'form'",
          lg: "'. . . .' '. logo form .' '. . . .'",
        }}
        justifyContent="center"
        padding={{ base: "32px", lg: "0px" }}
        alignItems="center"
      >
        <Flex gridArea="logo" flexDir="column" alignItems="flex-start">
          <img src="/skylab.svg" alt="Skylab" style={{ width: 100, alignSelf:'center' }}/>

          <Heading size="2xl" lineHeight="shorter" marginTop={10} textAlign="center">
            Faça seu login na plataforma
          </Heading>
        </Flex>
        <Flex
          gridArea="form"
          height="100%"
          backgroundColor="gray.700"
          borderRadius="md"
          flexDir="column"
          alignItems="stretch"
          padding={{ base: 14, lg: 10 }}
        >
          <Input
            text="E-mail"
            iconLeft={<FiMail />}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <Input
            text="Senha"
            iconLeft={<FiLock />}
            iconRight={
              passwordHide ? (
                <FiEye onClick={() => setPasswordHide(!passwordHide)} />
              ) : (
                <FiEyeOff onClick={() => setPasswordHide(!passwordHide)} />
              )
            }
            marginTop={2}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <Link
            alignSelf="flex-start"
            marginTop={2}
            fontSize="sm"
            color="purple.600"
            fontWeight="bold"
            _hover={{ color: "purple.500" }}
          >
            Esqueci minha senha
          </Link>
          <Button
            backgroundColor="purple.500"
            height="50px"
            borderRadius="sm"
            marginTop={6}
            isDisabled={!password || !email ? true : false}
            _hover={{ backgroundColor: "purple.600" }}
          >
            ENTRAR
          </Button>
          <Text textAlign="center" fontSize="sm" color="gray.300" marginTop={6}>
            Não tem uma conta?{" "}
            <Link
              color="purple.600"
              fontWeight="bold"
              _hover={{ color: "purple.500" }}
            >
              Resgistre-se
            </Link>
          </Text>
          <Divider />
          <Flex alignItems="center" flexDir={{ base: "column", lg: "row" }}>
            <Text fontSize="sm">Ou entre com</Text>
            <Button
              height="50px"
              width="100%"
              backgroundColor="gray.600"
              marginLeft={6}
              borderRadius="sm"
              _hover={{ backgroundColor: "purple.500" }}
              onMouseEnter={() => setFocusBtn(true)}
              onMouseLeave={() => setFocusBtn(false)}
            >
              <FiGithub
                size="1.2rem"
                color={focusBtn ? "#FFF" : "#8257e5"}
                style={{ marginRight: 5 }}
              />
              GITHUB
            </Button>
          </Flex>
        </Flex>
      </Grid>
    </>
  );
}
