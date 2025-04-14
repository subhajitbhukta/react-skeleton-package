
# 🦴 React Loading Skeletons by Subhajit (npm package)

A lightweight, customizable, and beautiful loading skeleton component library for React, built with Tailwind CSS. Perfect for improving UX during data fetching and loading states.

---

## 📦 Installation

```bash
npm install loading-skeleton-by-subhajit
```

or with yarn:

```bash
yarn add loading-skeleton-by-subhajit
```

---

## 🚀 Quick Start

```tsx
import React, { useEffect } from "react"
import { useSkeleton } from "loading-skeleton-by-subhajit"

export default function SkeletonShowcase() {
  const {
    loading,
    simulateLoading,
    Skeleton,
    TextSkeleton,
    AvatarSkeleton,
    CardSkeleton,
    TableSkeleton,
  } = useSkeleton()

  useEffect(() => {
    simulateLoading(2500) // Simulate loading for 2.5 seconds
  }, [])

  return (
    <div className="p-6 space-y-12 max-w-5xl mx-auto">
      {loading ? <TextSkeleton lines={3} /> : <p>Your real content here.</p>}
    </div>
  )
}
```

---

## 🧩 Available Skeleton Components

### ✅ `Skeleton`
A basic rectangular skeleton with customizable size and shape.

```tsx
<Skeleton width="100%" height="2rem" rounded="skeleton-rounded-md" />
```

| Prop        | Type     | Default     | Description                     |
|-------------|----------|-------------|---------------------------------|
| `width`     | `string` | `"100%"`    | Width of the skeleton           |
| `height`    | `string` | `"1rem"`    | Height of the skeleton          |
| `rounded`   | `string` | `"rounded"` | Tailwind class for border radius |

---

### ✅ `TextSkeleton`
Multi-line text placeholder, perfect for loading paragraphs or headlines.

```tsx
<TextSkeleton lines={4} lastLineWidth="60%" />
```

| Prop            | Type     | Default | Description                                   |
|-----------------|----------|---------|-----------------------------------------------|
| `lines`         | `number` | `3`     | Number of lines                               |
| `lastLineWidth` | `string` | `70%`   | Width of the last line for a more natural look |

---

### ✅ `AvatarSkeleton`
Circle skeleton for avatars or profile pictures.

```tsx
<AvatarSkeleton size="4rem" />
```

| Prop   | Type     | Default | Description                  |
|--------|----------|---------|------------------------------|
| `size` | `string` | `3rem`  | Diameter of the avatar circle |

---

### ✅ `CardSkeleton`
A beautiful card-style placeholder for UI previews.

```tsx
<CardSkeleton />
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| –    | –    | –       | Pre-styled component, no props required |

---

### ✅ `TableSkeleton`
Mimics a table layout – great for admin dashboards and data-heavy UIs.

```tsx
<TableSkeleton rows={4} columns={4} />
```

| Prop      | Type     | Default | Description                 |
|-----------|----------|---------|-----------------------------|
| `rows`    | `number` | `3`     | Number of table rows        |
| `columns` | `number` | `3`     | Number of table columns     |

---

## 🌀 Simulate Loading

Use the built-in loading simulation to trigger skeletons automatically:

```tsx
simulateLoading(durationInMilliseconds)
```

Example:

```tsx
simulateLoading(2500) // Simulates loading for 2.5 seconds
```

---

## 📸 Full Example Showcase

```tsx
import React, { useEffect } from "react"
import { useSkeleton } from "loading-skeleton-by-subhajit"

export default function SkeletonShowcase() {
  const {
    loading,
    simulateLoading,
    Skeleton,
    TextSkeleton,
    AvatarSkeleton,
    CardSkeleton,
    TableSkeleton,
  } = useSkeleton()

  useEffect(() => {
    simulateLoading(2500)
  }, [])

  return (
    <div className="p-6 space-y-12 max-w-5xl mx-auto">
      {/* Profile Skeleton */}
      <section>
        <h2 className="text-xl font-bold mb-4">Profile Section</h2>
        {loading ? (
          <div className="flex items-center gap-4">
            <AvatarSkeleton size="4rem" />
            <TextSkeleton lines={2} lastLineWidth="50%" />
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <img
              src="/avatar.jpg"
              alt="Avatar"
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="text-lg font-medium">Subhajit Bhukta</h3>
              <p className="text-sm text-gray-600">Frontend Developer</p>
            </div>
          </div>
        )}
      </section>

      {/* Custom Skeleton */}
      <section>
        <h2 className="text-xl font-bold mb-4">Custom Skeleton</h2>
        {loading ? (
          <Skeleton width="100%" height="2rem" rounded="skeleton-rounded-md" />
        ) : (
          <div className="text-lg font-medium">Custom content is now loaded!</div>
        )}
      </section>

      {/* Text Skeleton */}
      <section>
        <h2 className="text-xl font-bold mb-4">Text Content</h2>
        {loading ? (
          <TextSkeleton lines={4} lastLineWidth="60%" />
        ) : (
          <p>
            This is the actual paragraph text. It replaces the skeleton after loading is complete.
          </p>
        )}
      </section>

      {/* Card Skeleton */}
      <section>
        <h2 className="text-xl font-bold mb-4">Card Section</h2>
        {loading ? (
          <CardSkeleton />
        ) : (
          <div className="border p-4 rounded-lg shadow space-y-2">
            <img
              src="/thumbnail.jpg"
              alt="Thumbnail"
              className="w-full h-48 object-cover rounded-lg"
            />
            <h4 className="text-lg font-semibold">Sample Card Title</h4>
            <p className="text-sm text-gray-500">This is some description inside a card.</p>
          </div>
        )}
      </section>

      {/* Table Skeleton */}
      <section>
        <h2 className="text-xl font-bold mb-4">Table Section</h2>
        {loading ? (
          <TableSkeleton rows={4} columns={4} />
        ) : (
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border">Name</th>
                <th className="px-4 py-2 border">Email</th>
                <th className="px-4 py-2 border">Role</th>
                <th className="px-4 py-2 border">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-sm">
                <td className="px-4 py-2 border">John Doe</td>
                <td className="px-4 py-2 border">john@example.com</td>
                <td className="px-4 py-2 border">Admin</td>
                <td className="px-4 py-2 border">Active</td>
              </tr>
              <tr className="text-sm">
                <td className="px-4 py-2 border">Jane Smith</td>
                <td className="px-4 py-2 border">jane@example.com</td>
                <td className="px-4 py-2 border">User</td>
                <td className="px-4 py-2 border">Inactive</td>
              </tr>
            </tbody>
          </table>
        )}
      </section>
    </div>
  )
}
```


## 🙌 Author

Made with ❤️ by [Subhajit Bhukta](https://subhajitbhukta.in)  
Follow me on [GitHub](https://github.com/subhajit-bhukta)

---

## 📃 License

**MIT** – free for personal and commercial use.
