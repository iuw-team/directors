import 'react-vertical-timeline-component/style.min.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import WorkIcon from '../icons/student.svg'
import StudentIcon from '../icons/student.svg'
import CommitmentIcon from '../icons/handshake.svg';
import AwardIcon from '../icons/award.svg'
import MonumentIcon from '../icons/monument.svg'
import { messages } from '../locales/messages';
import TheaterIcon from '../icons/masks-theater.svg';
import MoscowIcon from '../icons/kremlin.png';
import CameraIcon from '../icons/camera.png';
import { getIcon } from './Services';

import { FormattedMessage } from 'react-intl';
export const Milestones = (authorId) => {
    return(
      <div className='card'>
        <div className='gallery-title card-header w-100 '>
            <h3 className='card-title display-3 text-center'>
            <FormattedMessage id='timelineTitle'></FormattedMessage>
           </h3>
        </div>
        <VerticalTimeline lineColor={'red'}>
          <VerticalTimelineElement
            className="vertical-timeline-element--legacy"
            date="1961 - 1967"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff'}}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            iconStyle={{ background: 'rgb(72, 216, 115)', color: 'rgb(30, 52, 166)'}}
            icon={getIcon(MonumentIcon)}
          >
            <h3 className="vertical-timeline-element-title">Смерть режиссёра</h3>
            <h4 className="vertical-timeline-element-subtitle"></h4>
            <p>
              Великий режиссёр умер в возрасте 82 лет. Похоронен в Москве на Ваганьковском кладбище.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="1961 - 1967"
            iconStyle={{ background: '#e8da1c', color: '#fff' }}
            icon={getIcon(CommitmentIcon)}
          >
            <h3 className="vertical-timeline-element-title">Поздние годы</h3>
            <p className="vertical-timeline-element-info">
              Возглавляет студию молодых кинематографистов "Рассказы о молодости", активно сотрудничает
              с Беларусьфильмом в съёмках научно-по­пулярных и художественно-документальных очерков.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="1945 - 1967"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={getIcon(MoscowIcon, 50)}
          >
            <h3 className="vertical-timeline-element-title">Московский период</h3>
            <h4 className="vertical-timeline-element-subtitle"></h4>
            <p>
              Активно консультирует сценарный отдел киностудии "Союздетфильм". Занимал пост режиссёра 
              Театра-студии киноактёра.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="1928 - 1939"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            icon={getIcon(TheaterIcon)}
          >
            <h3 className="vertical-timeline-element-title">Савецкая Беларусь</h3>
            <h4 className="vertical-timeline-element-subtitle"></h4>
            <p>
              Создал первую белорусскую звуковую кинопрограмму Переворот». 
              Заложил фундаментальные основы в белорусское кинопроизводтсво.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="1926"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={getIcon(CameraIcon)}
          >
            <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
            <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
            <p>
              Выходит первый белорусский фильм ("Лесная быль") - по повести М. Чарота "Свинопас"
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="November 2012"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<img src ={WorkIcon} />}
          >
            <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
            <h4 className="vertical-timeline-element-subtitle">Certification</h4>
            <p>
              Creative Direction, User Experience, Visual Design
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2002 - 2006"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
            icon={<img src ={WorkIcon} />}
          >
            <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
            <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
            <p>
              Creative Direction, Visual Desi gn
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            icon={getIcon(WorkIcon)}
          />
        </VerticalTimeline>
      </div>
       
    );
}