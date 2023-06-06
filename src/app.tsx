import React from 'react';
import { Typography } from 'antd';

import pianzi1 from 'url:../assets/片子1.jpeg';
import pianzi2 from 'url:../assets/片子2.jpeg';
import xbct from 'url:../assets/胸部CT平扫.jpeg';
import niao from 'url:../assets/尿常规.jpeg';
import quanxue from 'url:../assets/全血.jpeg';
import quanxue2 from 'url:../assets/全血2.jpeg';
import xuejiang from 'url:../assets/血浆.jpeg';
import xuejiang2 from 'url:../assets/血浆2.jpeg';
import xueqing from 'url:../assets/血清.jpeg';
import xueqing2 from 'url:../assets/血清2.jpeg';
import xueqing3 from 'url:../assets/血清3.jpeg';
import xueqing4 from 'url:../assets/血清4.jpeg';

const { Title, Paragraph, Text } = Typography;

const App = () => {
  return (
    <>
      <Title>病例</Title>
      <Paragraph>
        刘金龙，男，68岁（1955年生）
        <ol>
          <li>2015年检查出甲状腺乳头状癌。在深圳人民医院做了甲状腺全切除术。</li>
          <li>2019年进行了二次手术。</li>
          <li>2022年脖子再次出现肿瘤，因为疫情耽误了治疗，病人不想麻烦子女，去找了民间医生针灸</li>
          <li>2023年开始服用盐酸安罗替尼靶向药。第一个疗程效果不明显。第二三个疗程有效果，接下来又是效果不明显</li>
          <li>2023年5月情况急转直下，患者脖子肿瘤开始溃烂。</li>
          <li>2023年6月肺部出现问题。住院后精神状态很差。</li>
        </ol>
        <Title level={4}>片子1</Title>
        <img src={pianzi1} />
        <hr />
        <Title level={4}>片子2</Title>
        <img src={pianzi2} />
        <hr />
        <Title level={4}>胸部CT平扫</Title>
        <img src={xbct} />
        <hr />
        <Title level={4}>尿液</Title>
        <img src={niao} className="rotate-image" width={1024} />
        <hr />
        <Title level={4}>全血</Title>
        <img src={quanxue} className="rotate-image" width={1024} />
        <hr />
        <Title level={4}>全血2</Title>
        <Text style={{ color: 'blue' }}>照片模糊，请见谅。</Text>
        <img src={quanxue2} className="rotate-image" width={1024} />
        <hr />
        <Title level={4}>血浆</Title>
        <img src={xuejiang} className="rotate-image" width={1024} />
        <hr />
        <Title level={4}>血浆2</Title>
        <img src={xuejiang2} className="rotate-image" width={1024} />
        <hr />
        <Title level={4}>血清</Title>
        <img src={xueqing} className="rotate-image" width={1024} />
        <hr />
        <Title level={4}>血清2</Title>
        <img src={xueqing2} className="rotate-image" width={1024} />
        <hr />
        <Title level={4}>血清3</Title>
        <Text style={{ color: 'blue' }}>照片模糊，请见谅。</Text>
        <img src={xueqing3} className="rotate-image" width={1024} />
        <hr />
        <Title level={4}>血清4</Title>
        <Text style={{ color: 'blue' }}>照片模糊，请见谅。</Text>
        <img src={xueqing4} className="rotate-image" width={1024} />
        <hr />
      </Paragraph>
    </>
  );
};

export default App;
