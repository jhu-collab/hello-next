import { Title, Text } from "@mantine/core";
import useStyles from "./Welcome.styles";

export function Welcome() {
  const { classes } = useStyles();

  return (
    <>
      <Title className={classes.title} align="center" mt={100}>
        Welcome to <br />
        <Text inherit variant="gradient" component="span">
          Next + Mantine
        </Text>
      </Title>
      <Text
        color="dimmed"
        align="center"
        size="lg"
        sx={{ maxWidth: 480 }}
        mx="auto"
        mt="xl"
      >
        {`This a hello-world app!`}
      </Text>
    </>
  );
}
