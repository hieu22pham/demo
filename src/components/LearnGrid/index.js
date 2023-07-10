import {Row, Col} from 'antd';

function LearnGrid(){
    return(
        <>
            <Row>
                <Col xxl = {2} xl ={4} lg={2} md={6} sm={10} xs={12}>Cot 1</Col>
                <Col span="2">Cot 2</Col>
                <Col span="8">Cot 3</Col>
                <Col span="2">Cot 4</Col>

                
            </Row>
        </>
    )
}

export default LearnGrid;