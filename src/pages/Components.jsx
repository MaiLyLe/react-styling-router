import TailwindExample from '../TailwindExample'

import MyCSSButton from '../components/MyCSSButton/MyCSSButton';
import MyTailwindButton from '../components/MyTailwindButton';

function ComponentsPage() {
    return(

    <div className="grid gap-6 mb-8">
        <TailwindExample />

    <div className="flex flex-col gap-4 md:flex-row md:justify-center">
        <MyCSSButton />
        <MyTailwindButton />
    </div>
</div>

    )
}

export default ComponentsPage