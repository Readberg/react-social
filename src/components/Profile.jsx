import c from './Profile.module.css'

function Profile() {
    return (
        <div className={c.profile}>
        <img className={c.cover} src="https://cdn.pixabay.com/photo/2017/07/03/20/17/colorful-2468874__480.jpg" alt="" />
        <div>
          <img className={c.photo} src="https://images.complex.com/complex/images/fl_lossy,q_auto/c_crop,h_1400,w_1374,x_0,y_100/v1/el91rtzrnvpaeemkjegt/girl-in-red-3" alt="" />
          <div className={c.edit}>Edit profile</div>
        </div>
        <div>
          Description
        </div>
        <div>
          Posts
          <div>
            New posts
          </div>
          <div>
            <div>
              post 1
            </div>
            <div>
              post 2
            </div>
          </div>
        </div>
      </div>
    )
}

export default Profile;