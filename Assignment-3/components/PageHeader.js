import { Card } from 'react-bootstrap';

function PageHeader({text}) {
    return (
        <div>
            <Card className="bg-light mb-4">
                <Card.Body>
                    {text}
                </Card.Body>
            </Card>
            <br />
        </div>
    );
}

export default PageHeader;
