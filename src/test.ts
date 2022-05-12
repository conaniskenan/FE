type FC = (arg: string) => void

const fn: FC = (name: string) => {
	console.log(name)
}
fn('hhh')
