import { Card, Text, Badge, Group } from '@mantine/core';

const CardItem = (card) => {
  console.log(card);
  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{card.profession}</Text>
        <Badge color="pink" variant="light">
          On Sale
        </Badge>
      </Group>
      <Group>
        <Text size="sm" color="dimmed">
          {`${card.payment_from} ${card.payment_to} ${card.currency}`}
        </Text>
        <Text size="sm" color="dimmed">
          {card.type_of_work.title}
        </Text>
      </Group>

      <Text size="sm" color="dimmed">
        {card.town.genitive}
      </Text>
    </Card>
  );
};
export default CardItem;
