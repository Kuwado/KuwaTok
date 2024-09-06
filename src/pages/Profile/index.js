import { useParams } from 'react-router-dom';

function Profile() {
    const { nickname } = useParams(); // Lấy giá trị của nickname từ URL

    return (
        <div>
            <h1>Profile của {nickname}</h1>
        </div>
    );
}

export default Profile;
