import Button from "@/components/Button"
import Card from "@/components/Card"

const Landing: React.FC =  () => {
  return (
    <div>
    <Card />
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Landing Page</h1>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Small Buttons</h2>
        <Button title="Small - rounded-sm" styles="text-sm rounded-sm" />
        <Button title="Small - rounded-md" styles="text-sm rounded-md" />
        <Button title="Small - rounded-md" styles="text-sm rounded-lg" />
        <Button title="Small - rounded-full" styles="text-sm rounded-full" />
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Medium Buttons</h2>
        <Button title="Medium - rounded-sm" styles="text-base rounded-sm" />
        <Button title="Medium - rounded-md" styles="text-base rounded-md" />
        <Button title="Medium - rounded-md" styles="text-base rounded-lg" />
        <Button title="Medium - rounded-full" styles="text-base rounded-full" />
      </div>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Large Buttons</h2>
        <Button title="Large - rounded-sm" styles="text-lg px-6 py-3 rounded-sm" />
        <Button title="Large - rounded-md" styles="text-lg px-6 py-3 rounded-md" />
        <Button title="Large - rounded-md" styles="text-lg px-6 py-3 rounded-lg" />
        <Button title="Large - rounded-full" styles="text-lg px-6 py-3 rounded-full" />
      </div>
    </div>

    </div>
  )
}
export default Landing