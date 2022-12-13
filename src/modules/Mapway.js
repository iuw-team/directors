import 'leaflet/dist/leaflet.css';
import React from 'react';
import  { FormattedMessage, FormattedNumber, FormattedPlural} from 'react-intl';
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import { getMapMarkerRef, getMarkerArrPos } from './Services';
import {Icon} from 'leaflet';
import {useIntl} from 'react-intl';
const DEFAULT_MARKER_SIZE = [50, 50];
export const MapPoints = ({authorId}) => {
    const marker = new Icon(
        {
            iconUrl: getMapMarkerRef(authorId),
            iconSize: DEFAULT_MARKER_SIZE
        }
    );
    const intl = useIntl();
    const arrMarkerInfo = intl.messages['mapInfo'][authorId];
    const arrMarkerPos = getMarkerArrPos(authorId);

    const mapPos = [53.89, 27.57];
    return (
        <div className='map-way card'>
            <div className='map-way__title card-header w-100 '>
                <h3 className='card-title display-3 text-center'>
                <FormattedMessage id='mapTitle'></FormattedMessage>
                </h3>
            </div>
            <MapContainer center={mapPos} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                arrMarkerPos.map( (markerPos, index) => (
                    <Marker position={markerPos} icon={marker}>
                    <Popup>
                        {arrMarkerInfo[index]}
                    </Popup>
                    </Marker>
                ))
            }
            </MapContainer>

        </div>
    );
}