import PostGallery from "../../organisms/PostGallery";
import {useEffect, useState} from "react";
import {ImagePostDTO} from "../../../types/models/ImagePost.model";
import PostImageService from "../../../Services/PostImageService";
import {useParams} from "react-router-dom";


export default function UserGalleryPage() {
    const [posts, setPosts] = useState<ImagePostDTO[]>([]);
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        const fetchPosts = async () => {
            if (id) {
                const data = await PostImageService.getUsersImagePosts(id);
                setPosts(data);
            }
        };
        fetchPosts();
    }, [id]);

    return (
        <PostGallery
            posts={posts}
        />
    )
}