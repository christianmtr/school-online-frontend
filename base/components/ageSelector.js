import { Radio } from 'antd';

export default function AgeSector() {
    return (
      <div className="flex place-content-center content-center pt-12">
        <Radio.Group defaultValue="a" size="large">
          <Radio.Button value="1">Todos</Radio.Button>
          <Radio.Button value="2">5 -7</Radio.Button>
          <Radio.Button value="3">8 - 9</Radio.Button>
          <Radio.Button value="4">10 - 11</Radio.Button>
          <Radio.Button value="5">12 - 15</Radio.Button>
          <Radio.Button value="6">16 - 18</Radio.Button>
        </Radio.Group>
      </div>
    );
}
