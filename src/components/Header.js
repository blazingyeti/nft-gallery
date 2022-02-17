import React from 'react';
import { Button, Container, Badge, ButtonGroup } from 'react-bootstrap';
import { useConnect, useAccount } from 'wagmi';

const Header = () => {
  const [{ data, error }, connect] = useConnect()
  const [{ data: accountData }] = useAccount()

  return (
    <Container id='header' className='d-flex flex-row-reverse'>
      {
        accountData
        ? <Badge bg="dark">
            {`${[...accountData.address].splice(0, 6).join("")}...${[...accountData.address].splice(37).join("")}`}
          </Badge>
        : <ButtonGroup>
            {data.connectors.map((connector) => (
              <Button
                className='d-flex'
                variant="outline-dark"
                disabled={!connector.ready}
                key={connector.id}
                onClick={() => connect(connector)}
              >
                {connector.name}
                {!connector.ready && ' (unsupported)'}
              </Button>
            ))}
            {error && <div>{error?.message ?? 'Failed to connect'}</div>}
          </ButtonGroup>
      }
    </Container>
  )
}

export default Header;
