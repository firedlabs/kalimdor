import { VideoPlayer } from '@firedlabs/design-system'
import usePlayer from './usePlayer'

function Player() {
  const { data, changeLessonActive, lessonActive } = usePlayer()

  return (
    <VideoPlayer
      {...data}
      changeLessonActive={changeLessonActive}
      lessonActive={lessonActive}
    />
  )
}

export default Player
