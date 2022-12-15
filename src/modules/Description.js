import './description-small.css';

import  { useIntl, FormattedMessage, FormattedNumber, FormattedPlural} from 'react-intl';
import React from 'react';
import { Table, Card } from 'react-bootstrap';
import { getTitleImage } from './Services';
import { FormatError } from 'intl-messageformat';

export const Description = ({authorId}) => {
    const intl = useIntl();
    const arrAuthorName = intl.messages['authorName'];
    const arrBirthDate  = intl.messages['birthDate'];
    const arrDeathDate  = intl.messages['deathDate'];
    const arrProfType   = intl.messages['profType'];
    return(
        <div className='common-info-contatiner'>
                <Card>
                    <Card.Body>
                        <Table className='common-info' striped='columns'>
                    <tbody>
                    <tr>
                      <th className="common-info__title" colSpan="2">{arrAuthorName[authorId]}</th>
                    </tr>
                    <tr>
                        <td className="common-info__title-image" colSpan='2'>{getTitleImage(authorId)}</td>
                    </tr>
                    <tr>
                        <th className="common-info__text common-info__text-title" scope="row">
                            <FormattedMessage id="birthDateTitle"></FormattedMessage> 
                        </th>
                        <td className="common-info__text common-info__text-info">
                            {arrBirthDate[authorId]}
                        </td>
                    </tr>
                    <tr>
                        <th className="common-info__text common-info__text-title" scope="row">
                            <FormattedMessage id="deathDateTitle"></FormattedMessage> 
                        </th>
                        <td className="common-info__text common-info__text-info">
                            {arrDeathDate[authorId]}
                        </td>
                    </tr>
                    <tr>
                        <th className="common-info__text common-info__text-title" scope="row">
                            <FormattedMessage id='profTitle'></FormattedMessage>
                        </th>
                        <td className="common-info__text common-info__text-info">{arrProfType[authorId]}</td>
                    </tr>
                </tbody>
            </Table>
 
                    </Card.Body>
                </Card>
               </div>
    )
}