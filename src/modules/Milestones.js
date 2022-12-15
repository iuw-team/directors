import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { getIcon, IconType } from './Services';
import {useIntl} from 'react-intl';
import { FormattedMessage } from 'react-intl';
export const Milestones = ({authorId}) => {
    const intl = useIntl();
    const arrTimelineInfo = intl.messages['timelineInfo'][authorId];
    const arrNodeColor = ['rgb(72, 216, 115)', 'rgb(245, 197, 66)', 'rgb(66, 138, 245)']
    const arrContentColor = [];
    let iNodeColor = 0;
    const getNodeIndex = () => {
      let result = iNodeColor;
      iNodeColor = (iNodeColor + 1) % arrNodeColor.length;
      return result;
    }
    return(
      <div className='card'>
        <div className='gallery-title card-header w-100 '>
            <h3 className='card-title display-3 text-center'>
            <FormattedMessage id='timelineTitle'></FormattedMessage>
           </h3>
        </div>
        <VerticalTimeline lineColor={'red'}>
          {
            arrTimelineInfo.map ((item) => (
              <VerticalTimelineElement
              className="vertical-timeline-element"
              date={item.date}
              contentStyle={{ background: 'rgb(33, 150, 243)', color: '#504560'}}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              iconStyle={{ background: arrNodeColor[getNodeIndex()], color: 'rgb(30, 52, 166)'}}
              icon={getIcon(item.icon)}
            >
              <h3 className="vertical-timeline-element-title">{item.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{item.subtitle}</h4>
              <p>
                {item.info}
              </p>
            </VerticalTimelineElement>  
            ))
          }
        </VerticalTimeline>
      </div>
       
    );
}