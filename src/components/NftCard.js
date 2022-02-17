import { Card } from 'react-bootstrap'

const NftCard = ({ image, id, title, attributes }) => {
  return (
    <Card className='col-6'>
      <Card.Img key={id} src={image}></Card.Img>
      <Card.Body>
        <Card.Title>{title ? title : "No title"}</Card.Title>
        <Card.Text>
          {attributes?.length > 0 && attributes.map(attribute => {
            return (
              <div className='flex'>
                {attribute.trait_type}: {attribute.value}
              </div>
            )
          })}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default NftCard;
